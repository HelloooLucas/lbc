import api from "../../api";
import { useRouter } from "next/router";
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

async function getDetails(convId: string) {
  const res = await api.get(`/conversation/${convId}`);
  return res.data[0];
}

async function getmessages(convId: string) {
  const res = await api.get("/messages", {
    params: { conversationId: convId },
  });
  return res.data;
}

async function postMessage({
  convId,
  message,
}: {
  convId: string;
  message: string;
}) {
  const timestamp = Date.now();
  const userId = getLoggedUserId();

  const res = await api.post(
    "/messages",
    JSON.stringify({
      conversationId: convId,
      timestamp,
      authorId: userId,
      body: message,
    })
  );

  return res;
}

function useConversation() {
  const {
    query: { conversationId },
  } = useRouter();
  const queryClient = useQueryClient();

  const convId = Array.isArray(conversationId)
    ? conversationId[0]
    : conversationId;

  const conversationMessagesQueryKey = ["conversation-messages", { convId }];

  const details = useQuery({
    queryKey: ["conversation-details", { convId }],
    queryFn: () => getDetails(convId),
    enabled: !!convId,
  });

  const messages = useQuery({
    queryKey: conversationMessagesQueryKey,
    queryFn: () => getmessages(convId),
    enabled: !!convId,
  });

  const mutation = useMutation({
    mutationFn: postMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: conversationMessagesQueryKey,
      });
      queryClient.invalidateQueries({ queryKey: ["conversations-list"] });
    },
  });

  return {
    isFetching: details.isFetching || messages.isFetching,
    details: details.data,
    messages: messages.data,
    error: details.error || messages.error,
    sendMessage: {
      ...mutation,
      mutate: (message: string) => mutation.mutate({ convId, message }),
    },
  };
}

export default useConversation;
