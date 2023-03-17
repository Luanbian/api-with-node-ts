import { describe, expect, it, vi } from "vitest";
import { UserController } from "../controllers/UserController";

describe("Delete an existing user by id", () => {
  it("should be able to delete an user", async () => {
    const deleteUserMock = vi.fn().mockResolvedValue([1])
    const userController = new UserController({deleteUser: deleteUserMock} as any);
    const inputId = "17";
    await expect(userController.deleteUser(inputId)).resolves.toEqual({
      statusCode: 200,
      message: "deleted",
      data: { id: [1] },
    })
    expect(deleteUserMock).toHaveBeenCalledOnce()
    expect(deleteUserMock).toHaveBeenCalledWith(inputId)
  });
});
