from diagrams import Cluster, Diagram, Edge
from diagrams.custom import Custom

resource_path = './src/resources/'

with Diagram("Web Request Flow", show=False, direction="LR", filename="artifacts/diagram"):
  browser = Custom("User's Browser", f'.{resource_path}chrome.png')
  dns = Custom("Google Domains DNS", f'.{resource_path}google-domains.png')
  cdn = Custom("Cloudflare CDN", f'.{resource_path}cloudflare.png')

  with Cluster("SSR Application"):
    typescript = Custom("TypeScript", f'.{resource_path}typescript.png')
    react = Custom("React", f'.{resource_path}react.png')
    nextjs = Custom("Next.js", f'.{resource_path}nextjs.png')
    vercel = Custom("Vercel", f'.{resource_path}vercel.png')
    ssr_group = [ typescript,
                  react,
                  nextjs,
                  vercel]
    
    # This guarantees order of the nodes in the cluster.
    (
        typescript  - Edge(penwidth="0") - 
        react       - Edge(penwidth="0") - 
        nextjs      - Edge(penwidth="0") - 
        vercel
    )
    cdn >> vercel

  browser >> dns >> cdn