import { getUser } from "../../services/userService.js";

export default async ({ response, params }) => {
    const { installationId } = params;

    response.body = await getUser(installationId);
};