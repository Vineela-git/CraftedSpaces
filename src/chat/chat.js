import React from "react";
import { useWeavy, WyChat } from "@weavy/uikit-react";

export function WeavyComponent() {
  useWeavy({
    url: "https://ce74662ca77e403ca6ac493289d0e3c7.weavy.io",
    tokenFactory: async () => "wyu_wjLeFaXA24vqW0Ym5Ua7Zm8vLqgmfX1jS2Ss"
  });

  return <WyChat uid="wyuidchat"></WyChat>;
}
