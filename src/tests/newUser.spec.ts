import { describe, expect, it, vi } from "vitest";
import { UserController } from "../controllers/UserController";

describe("Create new User", () => {
  it("should be able to create a new user", async () => {
    const insertUserMock = vi.fn().mockResolvedValue([1])
    const userController = new UserController({InsertUser: insertUserMock} as any);
    const input = {
      name: "Luan",
      age: 22,
      role: "programador",
    };
    await expect(userController.newUser(input)).resolves.toEqual({
      statusCode: 201,
      message: "created",
      data: { id: [1] },
    });
    expect(insertUserMock).toHaveBeenCalledOnce()
    expect(insertUserMock).toHaveBeenCalledWith(input)
  });
});
