export interface MayorResponse {
    success:     boolean;
    lastUpdated: number;
    mayor:       Mayor;
    current:     Current;
}

export interface Current {
    year:       number;
    candidates: Candidate[];
}

export interface Candidate {
    key:    string;
    name:   string;
    perks:  CandidatePerk[];
    votes?: number;
}

export interface CandidatePerk {
    name:        string;
    description: string;
    minister?:    boolean;
}

export interface Mayor {
    key:      string;
    name:     string;
    perks:    CandidatePerk[];
    minister: Minister;
    election: Current;
}

export interface Minister {
    key:  string;
    name: string;
    perk: CandidatePerk;
}
