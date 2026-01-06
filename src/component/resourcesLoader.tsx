import { useResourceStore } from "../store/resource.store";

export async function loadLocalResource() {
    const json = await (
      await fetch("/data/resources.json")
    ).json();
    useResourceStore.getState().setResource(json.resources);
}