import { MacroAutocompletionProvider } from "./macroAutocompletionProvider";
import { DBTManifestInstance } from "../dbtManifest";
import { ModelAutocompletionProvider } from "./modelAutocompletionProvider";
import { SourceAutocompletionProvider } from "./sourceAutocompletionProvider";
import { manifestContainer } from "../manifestContainer";

export class AutocompletionProviderFactory {
  static createMacroAutocompletionProvider() {
    const macroAutocompletionProvider = new MacroAutocompletionProvider();
    manifestContainer.addEventHandler(macroAutocompletionProvider);
    return macroAutocompletionProvider;
  }

  static createModelAutocompletionProvider() {
    const modelAutocompletionProvider = new ModelAutocompletionProvider();
    manifestContainer.addEventHandler(modelAutocompletionProvider);
    return modelAutocompletionProvider;
  }

  static createSourceAutocompletionProvider() {
    const sourceAutocompletionProvider = new SourceAutocompletionProvider();
    manifestContainer.addEventHandler(sourceAutocompletionProvider);
    return sourceAutocompletionProvider;
  }
}