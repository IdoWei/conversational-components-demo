import { isUserRegistered } from "../../services/userService.js";

export default async ({ response, params }) => {
    const { installationId } = params;

    response.body = await isUserRegistered(installationId);
};