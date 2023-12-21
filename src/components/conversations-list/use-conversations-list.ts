import api from "../../api";
import { useQuery } from "@tanstack/react-query";
import { getLoggedUserId } from "../../utils/getLoggedUserId";

async function getConversationsList() {
  const userId = getLoggedUserId();
  const res = await api.get("/conversations", {
    params: { senderId: userId },
  });
  return res.data;
}

function useConversationsList() {
  return useQuery({
    queryKey: ["conversations-list"],
    queryFn: getConversationsList,
  });
}

export default useConversationsList;
