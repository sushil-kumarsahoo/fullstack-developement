Prisma + Cloudflare Workers: Fix
================================

Problem
-------

When using Prisma 7 with Cloudflare Workers you may see this error:

```
TypeError: The "path" argument must be of type string or an instance of URL. Received undefined
		at fileURLToPath
```

The fix
-------

Add `runtime = "cloudflare"` and `engineType = "client"` to your `generator` block in `schema.prisma`.

Complete setup
--------------

Add the following generator configuration to `schema.prisma`:

```prisma
generator client {
	provider   = "prisma-client"
	runtime    = "cloudflare"
	engineType = "client"
	output     = "../src/generated/prisma"
}
```

This ensures the Prisma client uses the Cloudflare runtime and the client engine type, avoiding the `fileURLToPath` error in Workers.

