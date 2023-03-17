import { describe, expect, it, vi } from "vitest";
import { UserController } from "../controllers/UserController";

describe("update an existing user by Id", () => {
  it("should be able to update by Id", async () => {
    const updateUserMock = vi.fn().mockResolvedValue([1]);
    const userController = new UserController({updateUser: updateUserMock,} as any);
    const input = {
      name: "programador",
      age: 44,
      role: "Luan",
    };
    const inputId = 17
    await expect(userController.updateUser({ input, inputId })).resolves.toEqual({
      statusCode: 200,
      message: "updated",
      data: { id: [ 1 ] },
    })
    expect(updateUserMock).toHaveBeenCalledOnce()
    expect(updateUserMock).toHaveBeenCalledWith(input) // refact
  });
});
