export type ModalType =
    | "SYNERGY";



export interface IBaseModal {
    title?: string,
}

export interface ISynergyModal extends IBaseModal {
    synergyTitle: string,
    icon: string,
    explain: string,
}

export interface ISkillModal extends IBaseModal {
    explain: string,
    coolTime: number,
}