import { describe, expect, it, vi } from "vitest";
import { UserController } from "../controllers/UserController";

describe("Show me the datas in the database", () => {
  it("should be able to show me the datas", async () => {
    const listUsersMock = vi.fn().mockResolvedValue([1])
    const userController = new UserController({listUsers: listUsersMock} as any)
    await expect(userController.users()).resolves.toEqual({
      statusCode: 200,
      message: [1],
    })
    expect(listUsersMock).toHaveBeenCalledOnce()
  });
});
