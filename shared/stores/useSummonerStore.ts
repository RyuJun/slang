import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import { Nullable } from "@/utils/common.types";
import { ISummoner, ISummonerStore } from "./useSummonerStore.types";

export const useSummonerStore = createWithEqualityFn<ISummonerStore>(
  (set) => ({
    summoner: null,
    setSummoner: (props: Nullable<ISummoner>) =>
      set(() => ({ summoner: props })),
  }),
  shallow
);
