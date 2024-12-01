const features = [ "5Gb de almacenamiento", "5Gb de almacenamiento","5Gb de almacenamiento", "5Gb de almacenamiento", "5Gb de almacenamiento", "5Gb de almacenamiento"]

type Plan = {
    title: string
    price: number
    features: string[]
    isPopular?: boolean
}

const BASIC_PLAN: Plan = {
    title: "Plan básico",
    price: 10,
    features: features
}

const PROFESIONAL_PLAN: Plan = {
    title: "Plan profesional",
    price: 15,
    features: features,
    isPopular: true
}

const ULTIMATE_PLAN: Plan = {
    title: "Plan ultimate",
    price: 18,
    features: features
}

export const plans = [BASIC_PLAN, PROFESIONAL_PLAN, ULTIMATE_PLAN]