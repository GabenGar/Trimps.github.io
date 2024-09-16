import { ensureIDSelector } from "#browser/dom";

export function initBottomRow() {
  initBuyColumn();
}

function initBuyColumn() {
  {
    const autoTrapBtn = ensureIDSelector<HTMLDivElement>("autoTrapBtn");

    autoTrapBtn.onclick = () => toggleAutoTrap();
  }

  {
    const buildingsCollectBtn = ensureIDSelector<HTMLDivElement>(
      "buildingsCollectBtn",
    );

    buildingsCollectBtn.onclick = () => setGather("buildings");
  }

  initBuyTabs();
  initNumTabs();
  initBuyContainer();
}

function initBuyTabs() {
  {
    const allTab = ensureIDSelector<HTMLLIElement>("allTab");

    allTab.onclick = () => filterTabs("all");
  }

  {
    const buildingsTab = ensureIDSelector<HTMLLIElement>("buildingsTab");

    buildingsTab.onclick = () => filterTabs("buildings");
  }

  {
    const jobsTab = ensureIDSelector<HTMLLIElement>("jobsTab");

    jobsTab.onclick = () => filterTabs("jobs");
  }

  {
    const upgradesTab = ensureIDSelector<HTMLLIElement>("upgradesTab");

    upgradesTab.onclick = () => filterTabs("upgrades");
  }

  {
    const equipmentTab = ensureIDSelector<HTMLLIElement>("equipmentTab");

    equipmentTab.onclick = () => filterTabs("equipment");
  }
}

function initNumTabs() {
  {
    const tab1 = ensureIDSelector<HTMLLIElement>("tab1");

    tab1.onclick = () => numTab(1);
  }

  {
    const tab2 = ensureIDSelector<HTMLLIElement>("tab2");

    tab2.onclick = () => numTab(2);
  }

  {
    const tab3 = ensureIDSelector<HTMLLIElement>("tab3");

    tab3.onclick = () => numTab(3);
  }

  {
    const tab4 = ensureIDSelector<HTMLLIElement>("tab4");

    tab4.onclick = () => numTab(4);
  }

  {
    const tab5Text = ensureIDSelector<HTMLAnchorElement>("tab5Text");

    tab5Text.onclick = () => numTab(5);
  }

  {
    const tab5Text2 = ensureIDSelector<HTMLAnchorElement>("tab5Text2");

    tab5Text2.onclick = () => tooltip("Custom", null, "update");
  }

  {
    const tab6 = ensureIDSelector<HTMLLIElement>("tab6");

    tab6.onclick = () => numTab(6);
    tab6.onmouseover = (event) =>
      tooltip(
        "Buy Max",
        "customText",
        event,
        "Switching to this option will spend the majority of your resources with each purchase. <b>Click twice to customize.</b>",
      );
    tab6.onmouseout = () => tooltip("hide");
  }
}

function initBuyContainer() {
  {
    const autoStructureBtn =
      ensureIDSelector<HTMLDivElement>("autoStructureBtn");

    autoStructureBtn.onmouseover = (event) =>
      tooltip("AutoStructure", null, event);
    autoStructureBtn.onmouseout = () => tooltip("hide");
  }

  {
    const autoStructureText =
      ensureIDSelector<HTMLDivElement>("autoStructureText");

    autoStructureText.onclick = () => toggleAutoStructure();
  }

  {
    const autoStructureConfig = ensureIDSelector<HTMLDivElement>(
      "autoStructureConfig",
    );

    autoStructureConfig.onclick = () =>
      tooltip("Configure AutoStructure", null, "update");
  }

  {
    const autoStorageBtn = ensureIDSelector<HTMLDivElement>("autoStorageBtn");

    autoStorageBtn.onmouseover = (event) =>
      tooltip(
        "AutoStorage",
        "customText",
        event,
        "Enabling this will cause your Trimps to automatically add a storage building to the queue if you reach max capacity. This will work on and offline if enabled.",
      );
    autoStorageBtn.onmouseout = () => tooltip("hide");
    autoStorageBtn.onclick = () => toggleAutoStorage();
  }

  {
    const autoJobsBtn = ensureIDSelector<HTMLDivElement>("autoJobsBtn");

    autoJobsBtn.onmouseover = (event) => tooltip("AutoJobs", null, event);
    autoJobsBtn.onmouseout = () => tooltip("hide");
  }

  {
    const autoJobsText = ensureIDSelector<HTMLDivElement>("autoJobsText");

    autoJobsText.onclick = () => toggleAutoJobs();
  }

  {
    const fireBtn = ensureIDSelector<HTMLDivElement>("fireBtn");

    fireBtn.onclick = () => fireMode();
    fireBtn.onmouseover = (event) => tooltip("Fire Trimps", null, event);
    fireBtn.onmouseout = () => tooltip("hide");
  }

  {
    const autoGoldenBtn = ensureIDSelector<HTMLDivElement>("autoGoldenBtn");

    autoGoldenBtn.onmouseover = (event) => tooltip("AutoGold", null, event);
    autoGoldenBtn.onmouseout = () => tooltip("hide");
  }

  {
    const autoPrestigeBtn = ensureIDSelector<HTMLDivElement>("autoPrestigeBtn");

    autoPrestigeBtn.onmouseover = (event) =>
      tooltip("AutoPrestige", null, event);
    autoPrestigeBtn.onmouseout = () => tooltip("hide");
    autoPrestigeBtn.onclick = () => toggleAutoPrestiges();
  }

  {
    const autoUpgradeBtn = ensureIDSelector<HTMLDivElement>("autoUpgradeBtn");

    autoUpgradeBtn.onmouseover = (event) => tooltip("AutoUpgrade", null, event);
    autoUpgradeBtn.onmouseout = () => tooltip("hide");
    autoUpgradeBtn.onclick = () => toggleAutoUpgrades();
  }

  {
    const autoEquipBtn = ensureIDSelector<HTMLDivElement>("autoEquipBtn");

    autoEquipBtn.onmouseover = (event) => tooltip("AutoEquip", null, event);
    autoEquipBtn.onmouseout = () => tooltip("hide");
  }

  {
    const autoEquipText = ensureIDSelector<HTMLDivElement>("autoEquipText");

    autoEquipText.onclick = () => toggleAutoEquip();
  }

  {
    const autoEquipConfig = ensureIDSelector<HTMLDivElement>("autoEquipConfig");

    autoEquipConfig.onclick = () =>
      tooltip("Configure AutoEquip", null, "update");
  }

  {
    const swapToMutatorsBtn =
      ensureIDSelector<HTMLDivElement>("swapToMutatorsBtn");

    swapToMutatorsBtn.onclick = () => u2Mutations.swapTab(true);
  }

  {
    const talentRespecBtn = ensureIDSelector<HTMLDivElement>("talentRespecBtn");

    talentRespecBtn.onmouseover = (event) =>
      tooltip("Respec Masteries", null, event);
    talentRespecBtn.onmouseout = () => tooltip("hide");
    talentRespecBtn.onclick = () => respecTalents();
  }

  {
    const talentsHere = ensureIDSelector<HTMLDivElement>("talentsHere");

    talentsHere.onload = function () {
      preventZoom(this);
    };
  }

  {
    const infoSpanPoison = ensureIDSelector<HTMLSpanElement>("infoSpanPoison");

    infoSpanPoison.onmouseover = (event) =>
      natureTooltip(event, "description", "Poison");
    infoSpanPoison.onmouseout = () => tooltip("hide");
  }

  {
    const natureUpgradePoison = ensureIDSelector<HTMLSpanElement>(
      "natureUpgradePoison",
    );

    natureUpgradePoison.onmouseover = (event) =>
      natureTooltip(event, "upgrade", "Poison");
    natureUpgradePoison.onmouseout = () => tooltip("hide");
    natureUpgradePoison.onclick = () => naturePurchase("upgrade", "Poison");
  }

  {
    const natureUpgradeTransferPoison = ensureIDSelector<HTMLSpanElement>(
      "natureUpgradeTransferPoison",
    );

    natureUpgradeTransferPoison.onmouseover = (event) =>
      natureTooltip(event, "stackTransfer", "Poison");
    natureUpgradeTransferPoison.onmouseout = () => tooltip("hide");
    natureUpgradeTransferPoison.onclick = () =>
      naturePurchase("stackTransfer", "Poison");
  }

  {
    const uberPoisonContainer = ensureIDSelector<HTMLSpanElement>(
      "uberPoisonContainer",
    );

    uberPoisonContainer.onmouseover = (event) =>
      natureTooltip(event, "uberEmpower", "Poison");
    uberPoisonContainer.onmouseout = () => tooltip("hide");
    uberPoisonContainer.onclick = () => naturePurchase("uberEmpower", "Poison");
  }

  {
    const natureConvertPoisonWind = ensureIDSelector<HTMLSpanElement>(
      "natureConvertPoisonWind",
    );

    natureConvertPoisonWind.onmouseover = (event) =>
      natureTooltip(event, "convert", "Poison", "Wind");
    natureConvertPoisonWind.onmouseout = () => tooltip("hide");
    natureConvertPoisonWind.onclick = () =>
      naturePurchase("convert", "Poison", "Wind");
  }

  {
    const natureConvertPoisonIce = ensureIDSelector<HTMLSpanElement>(
      "natureConvertPoisonIce",
    );

    natureConvertPoisonIce.onmouseover = (event) =>
      natureTooltip(event, "convert", "Poison", "Ice");
    natureConvertPoisonIce.onmouseout = () => tooltip("hide");
    natureConvertPoisonIce.onclick = () =>
      naturePurchase("convert", "Poison", "Ice");
  }

  {
    const infoSpanWind = ensureIDSelector<HTMLSpanElement>("infoSpanWind");

    infoSpanWind.onmouseover = (event) =>
      natureTooltip(event, "description", "Wind");
    infoSpanWind.onmouseout = () => tooltip("hide");
  }

  {
    const natureUpgradeLevelWind = ensureIDSelector<HTMLSpanElement>(
      "natureUpgradeLevelWind",
    );

    natureUpgradeLevelWind.onmouseover = (event) =>
      natureTooltip(event, "upgrade", "Wind");
    natureUpgradeLevelWind.onmouseout = () => tooltip("hide");
    natureUpgradeLevelWind.onclick = () => naturePurchase("upgrade", "Wind");
  }

  {
    const natureUpgradeTransferWind = ensureIDSelector<HTMLSpanElement>(
      "natureUpgradeTransferWind",
    );

    natureUpgradeTransferWind.onmouseover = (event) =>
      natureTooltip(event, "stackTransfer", "Wind");
    natureUpgradeTransferWind.onmouseout = () => tooltip("hide");
    natureUpgradeTransferWind.onclick = () =>
      naturePurchase("stackTransfer", "Wind");
  }

  {
    const uberWindContainer =
      ensureIDSelector<HTMLSpanElement>("uberWindContainer");

    uberWindContainer.onmouseover = (event) =>
      natureTooltip(event, "uberEmpower", "Wind");
    uberWindContainer.onmouseout = () => tooltip("hide");
    uberWindContainer.onclick = () => naturePurchase("uberEmpower", "Wind");
  }

  {
    const natureTransferWindPoison = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("natureTransferWindPoison");

    natureTransferWindPoison.onmouseover = (event) =>
      natureTooltip(event, "convert", "Wind", "Poison");
    natureTransferWindPoison.onmouseout = () => tooltip("hide");
    natureTransferWindPoison.onclick = () =>
      naturePurchase("convert", "Wind", "Poison");
  }

  {
    const natureTransferWindIce = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("natureTransferWindIce");

    natureTransferWindIce.onmouseover = (event) =>
      natureTooltip(event, "convert", "Wind", "Ice");
    natureTransferWindIce.onmouseout = () => tooltip("hide");
    natureTransferWindIce.onclick = () =>
      naturePurchase("convert", "Wind", "Ice");
  }

  {
    const infoSpanIce =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("infoSpanIce");

    infoSpanIce.onmouseover = (event) =>
      natureTooltip(event, "description", "Ice");
    infoSpanIce.onmouseout = () => tooltip("hide");
  }

  {
    const natureUpgradeLevelIce = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("natureUpgradeLevelIce");

    natureUpgradeLevelIce.onmouseover = (event) =>
      natureTooltip(event, "upgrade", "Ice");
    natureUpgradeLevelIce.onmouseout = () => tooltip("hide");
    natureUpgradeLevelIce.onclick = () => naturePurchase("upgrade", "Ice");
  }

  {
    const natureUpgradeTransferIce = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("natureUpgradeTransferIce");

    natureUpgradeTransferIce.onmouseover = (event) =>
      natureTooltip(event, "stackTransfer", "Ice");
    natureUpgradeTransferIce.onmouseout = () => tooltip("hide");
    natureUpgradeTransferIce.onclick = () =>
      naturePurchase("stackTransfer", "Ice");
  }

  {
    const uberIceContainer =
      ensureIDSelector<HTMLElementTagNameMap["span"]>("uberIceContainer");

    uberIceContainer.onmouseover = (event) =>
      natureTooltip(event, "uberEmpower", "Ice");
    uberIceContainer.onmouseout = () => tooltip("hide");
    uberIceContainer.onclick = () => naturePurchase("uberEmpower", "Ice");
  }

  {
    const natureConvertIcePoison = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("natureConvertIcePoison");

    natureConvertIcePoison.onmouseover = (event) =>
      natureTooltip(event, "convert", "Ice", "Poison");
    natureConvertIcePoison.onmouseout = () => tooltip("hide");
    natureConvertIcePoison.onclick = () =>
      naturePurchase("convert", "Ice", "Poison");
  }

  {
    const natureConvertIceWind = ensureIDSelector<
      HTMLElementTagNameMap["span"]
    >("natureConvertIceWind");

    natureConvertIceWind.onmouseover = (event) =>
      natureTooltip(event, "convert", "Ice", "Wind");
    natureConvertIceWind.onmouseout = () => tooltip("hide");
    natureConvertIceWind.onclick = () =>
      naturePurchase("convert", "Ice", "Wind");
  }
}

function initRightColumn() {}
