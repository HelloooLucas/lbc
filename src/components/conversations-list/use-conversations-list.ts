import api from "../../api";
import { useQuery } from "@tanstack/react-query";
import { getLoggedUserId } from "../../utils/getLoggedUserId";

export const CONVERSATIONS_LIST_QUERY_KEY = ["conversations-list"];

export async function getConversationsList() {
  const userId = getLoggedUserId();
  const res = await api.get("/conversations", {
    params: { senderId: userId },
  });
  return res.data;
}

function useConversationsList() {
  return useQuery({
    queryKey: CONVERSATIONS_LIST_QUERY_KEY,
    queryFn: getConversationsList,
  });
}

export default useConversationsList;
