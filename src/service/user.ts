import request from "../utils/request";
import { Payload } from "./types";

const mockBaseUrl =
  "/direct-mock/http/d40f7808f8f94aaed49f8b86a9b9a79dfe50e019cbd7f6073021249bb66aa9f7f53abcdbdc03a1e4a6d8eac3bb1a90fa63e1f6f5583474370751947bf8ba68626bfc465a846fc18a4e751770468c338f";

export const getUserInfo = () => {
  return request.get<Payload<API.User>>(`${mockBaseUrl}/api/v1/user/info`);
};
