export interface FilterShow {
    checkbox: FilterShowCheckbox[],
    range: FilterShowRange[]
}

export interface FilterShowCheckbox {
    title: string,
    value: {
        name: string,
        count: number
    }[]
}

export interface FilterShowRange {
    title: string,
    value: RangeFilter,
    count: number
}

export interface FilterApply {
    type?: string[],
    color?: string[],
    material?: string[],
    price?: RangeFilter
}

export interface RangeFilter {
    from?: number,
    to?: number,
}
