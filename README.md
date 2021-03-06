# CloudFlare-Workers-Raw

## Usage

-   PNG: <https://raw.dup4.com/?url=https://raw.githubusercontent.com/Dup4/CloudFlare-Workers-Raw/main/test/cloudflare.png>
-   PDF: <https://raw.dup4.com/?url=https://raw.githubusercontent.com/Dup4/CloudFlare-Workers-Raw/main/test/Test_PDF.pdf>

## Install

-   clone the project and enter the subdirectory (representing a worker)
-   Edit `index.js` and `wrangler.toml` (configuration key)
-   `wrangler config` configure mailbox and key
-   `wrangler build` build
-   `wrangler publish` release
-   Detailed documentation: <https://developers.cloudflare.com/workers/quickstart>

## Price

| CPU  | Daily request | Burst rate                  | Script size          |
| ---- | ------------- | --------------------------- | -------------------- |
| 10ms | 100,000       | 1000 requests in 10 minutes | 1M after compression |

Details: https://developers.cloudflare.com/workers/about/limits/

## Reference

-   [netnr/workers](https://github.com/netnr/workers)

## License

MIT.
