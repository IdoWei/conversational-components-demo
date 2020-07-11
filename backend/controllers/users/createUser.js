import { createUser } from "../../services/userService.js";

export default async ({ response, bodyData }) => {
    response.body = await createUser(bodyData);
};