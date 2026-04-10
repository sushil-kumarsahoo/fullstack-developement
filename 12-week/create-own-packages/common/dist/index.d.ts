import { z } from "zod";
export declare const signupInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type SignupParams = z.infer<typeof signupInput>;
//# sourceMappingURL=index.d.ts.map