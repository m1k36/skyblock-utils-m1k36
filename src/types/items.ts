export interface ItemResponse {
    success:     boolean;
    lastUpdated: number;
    items:       Item[];
}

export interface Item {
    material:                      string;
    durability?:                   number;
    skin?:                         Skin;
    name:                          string;
    category?:                     Category;
    tier?:                         TierEnum;
    npc_sell_price?:               number;
    id:                            string;
    salvages?:                     SalvageElement[];
    rarity_salvageable?:           boolean;
    stats?:                        { [key: string]: number };
    unstackable?:                  boolean;
    museum_data?:                  MuseumData;
    color?:                        string;
    soulbound?:                    Soulbound;
    has_uuid?:                     boolean | string;
    gemstone_slots?:               GemstoneSlot[];
    glowing?:                      boolean;
    can_auction?:                  boolean;
    can_trade?:                    boolean;
    requirements?:                 ItemRequirement[];
    can_place?:                    boolean;
    museum?:                       boolean;
    generator?:                    string;
    generator_tier?:               number;
    furniture?:                    string;
    item_specific?:                ItemSpecific;
    description?:                  string;
    upgrade_costs?:                Array<SalvageElement[]>;
    gear_score?:                   number;
    dungeon_item?:                 boolean;
    dungeon_item_conversion_cost?: DungeonItemConversionCost;
    catacombs_requirements?:       CatacombsRequirement[];
    can_recombobulate?:            boolean;
    can_have_attributes?:          boolean;
    salvageable_from_recipe?:      boolean;
    motes_sell_price?:             number;
    enchantments?:                 { [key: string]: number };
    rift_transferrable?:           boolean;
    origin?:                       Origin;
    double_tap_to_drop?:           boolean;
    hide_from_viewrecipe_command?: boolean;
    sword_type?:                   string;
    ability_damage_scaling?:       number;
    tiered_stats?:                 TieredStats;
    crystal?:                      string;
    can_burn_in_furnace?:          boolean;
    salvage?:                      PurpleSalvage;
    serializable?:                 boolean;
    can_interact?:                 boolean;
    can_interact_right_click?:     boolean;
    private_island?:               string;
    can_have_power_scroll?:        boolean;
    can_interact_entity?:          boolean;
    MINING_FORTUNE?:               number;
    recipes?:                      Recipe[];
    cannot_reforge?:               boolean;
    lose_motes_value_on_transfer?: boolean;
    prestige?:                     Prestige;
}

export interface CatacombsRequirement {
    type:         CatacombsRequirementType;
    dungeon_type: DungeonType;
    level:        number;
}

export enum DungeonType {
    Catacombs = "CATACOMBS",
    MasterCatacombs = "MASTER_CATACOMBS",
}

export enum CatacombsRequirementType {
    ChocolateFactory = "CHOCOLATE_FACTORY",
    Collection = "COLLECTION",
    CrimsonIsleReputation = "CRIMSON_ISLE_REPUTATION",
    DungeonSkill = "DUNGEON_SKILL",
    DungeonTier = "DUNGEON_TIER",
    EasterRabbit = "EASTER_RABBIT",
    GardenLevel = "GARDEN_LEVEL",
    HeartOfTheMountain = "HEART_OF_THE_MOUNTAIN",
    KuudraCompletion = "KUUDRA_COMPLETION",
    MelodyHair = "MELODY_HAIR",
    OneOf = "ONE_OF",
    ProfileAge = "PROFILE_AGE",
    Skill = "SKILL",
    Slayer = "SLAYER",
    TargetPractice = "TARGET_PRACTICE",
    TrophyFishing = "TROPHY_FISHING",
}

export enum Category {
    Accessory = "ACCESSORY",
    Arrow = "ARROW",
    ArrowPoison = "ARROW_POISON",
    Axe = "AXE",
    Bait = "BAIT",
    Belt = "BELT",
    Boots = "BOOTS",
    Bow = "BOW",
    Bracelet = "BRACELET",
    CarnivalMask = "CARNIVAL_MASK",
    Chestplate = "CHESTPLATE",
    Chisel = "CHISEL",
    Cloak = "CLOAK",
    Consumable = "CONSUMABLE",
    Cosmetic = "COSMETIC",
    Deployable = "DEPLOYABLE",
    Drill = "DRILL",
    DungeonPass = "DUNGEON_PASS",
    FishingRod = "FISHING_ROD",
    FishingRodPart = "FISHING_ROD_PART",
    Gauntlet = "GAUNTLET",
    Gloves = "GLOVES",
    Helmet = "HELMET",
    Hoe = "HOE",
    Leggings = "LEGGINGS",
    Longsword = "LONGSWORD",
    Memento = "MEMENTO",
    Necklace = "NECKLACE",
    None = "NONE",
    PetItem = "PET_ITEM",
    Pickaxe = "PICKAXE",
    Portal = "PORTAL",
    ReforgeStone = "REFORGE_STONE",
    Shears = "SHEARS",
    Spade = "SPADE",
    Sword = "SWORD",
    TravelScroll = "TRAVEL_SCROLL",
    Vacuum = "VACUUM",
    Wand = "WAND",
}

export interface DungeonItemConversionCost {
    essence_type: EssenceType;
    amount:       number;
}

export enum EssenceType {
    Crimson = "CRIMSON",
    Diamond = "DIAMOND",
    Dragon = "DRAGON",
    Gold = "GOLD",
    Ice = "ICE",
    Spider = "SPIDER",
    Undead = "UNDEAD",
    Wither = "WITHER",
}

export interface GemstoneSlot {
    slot_type: SlotType;
    costs?:    SalvageElement[];
}

export interface SalvageElement {
    type:          SalvageType;
    item_id?:      string;
    amount?:       number;
    coins?:        number;
    essence_type?: EssenceType;
}

export enum SalvageType {
    Coins = "COINS",
    Essence = "ESSENCE",
    Item = "ITEM",
}

export enum SlotType {
    Amber = "AMBER",
    Amethyst = "AMETHYST",
    Aquamarine = "AQUAMARINE",
    Chisel = "CHISEL",
    Citrine = "CITRINE",
    Combat = "COMBAT",
    Defensive = "DEFENSIVE",
    Jade = "JADE",
    Jasper = "JASPER",
    Mining = "MINING",
    Onyx = "ONYX",
    Opal = "OPAL",
    Peridot = "PERIDOT",
    Ruby = "RUBY",
    Sapphire = "SAPPHIRE",
    Topaz = "TOPAZ",
    Universal = "UNIVERSAL",
}

export interface ItemSpecific {
    memorable_event_key?:             string;
    permanent_health?:                number;
    permanent_crops_farming_fortune?: number;
    particle_color?:                  ParticleColor;
    max_contacts?:                    number;
    has_contact_directory?:           boolean;
    has_dnd?:                         boolean;
    portal?:                          Portal;
    ray_texture?:                     Skin;
    bonus_rift_damage_vs_vampire?:    number;
    bonus_experience_chance?:         number;
    speed_boost?:                     number;
    effect_duration_seconds?:         number;
    cooldown_seconds?:                number;
    mana_cost?:                       number;
    slow_duration_seconds?:           number;
    stats?:                           Stats;
    rift_stats?:                      RiftStats;
    duration_seconds?:                number;
    range?:                           number;
    max_other_players?:               number;
    chisel_charges?:                  number;
    scaling?:                         Scaling;
    rift_time_regain_on_kill?:        number;
    hearts_reduction?:                number;
    swappables?:                      { [key: string]: Swappable };
    range_blocks?:                    number;
    max_players?:                     number;
    damage_per_player?:               number;
    mana_regen_per_player?:           number;
    regained_rift_time?:              number;
    flex_skins?:                      FlexSkin[];
    mana_refund?:                     number;
    rift_time_gain?:                  number;
    experience_gained?:               number;
    charges?:                         number;
    consumed_item?:                   string;
    bonus_fishing_speed_per_bucket?:  number;
    max_bonus_fishing_speed?:         number;
    speed_duration_seconds?:          number;
    stats_on_rift?:                   StatsOnRift;
    rift_time_per_eat?:               number;
    motes_percent_per_eat?:           number;
    motes_on_join_per_eat?:           number;
    duration_ticks?:                  number;
    damage_multiplier?:               number;
    heal_on_hit?:                     number;
    heal?:                            number;
    bonus_heal?:                      number;
    speed_on_farming_island?:         number;
    extra_pelts?:                     number;
    max_musicdiscs?:                  number;
    can_play_tictactoe?:              boolean;
    can_play_snake?:                  boolean;
    bundled_item_id?:                 string;
    bundled_amount?:                  number;
}

export interface FlexSkin {
    skin:        Skin;
    name:        string;
    description: string;
}

export interface Skin {
    value:     string;
    signature: string;
}

export interface ParticleColor {
    red:   number;
    green: number;
    blue:  number;
}

export interface Portal {
    holo_name:          string;
    description_name?:  string;
    destination_mode:   string;
    location_tag?:      string;
    schematic_file:     string;
    offset?:            Offset;
    skill_requirement?: SkillRequirement;
    requirements?:      PortalRequirement[];
}

export enum Offset {
    Foraging = "FORAGING",
    Mine = "MINE",
    New = "NEW",
}

export interface PortalRequirement {
    type:   string;
    skill?: RequirementSkill;
    level?: number;
    quest?: string;
}

export enum RequirementSkill {
    Combat = "COMBAT",
    Farming = "FARMING",
    Fishing = "FISHING",
    Mining = "MINING",
    Social = "SOCIAL",
}

export interface SkillRequirement {
    skill: SkillRequirementSkill;
    level: number;
}

export enum SkillRequirementSkill {
    Combat = "COMBAT",
    Enchanting = "ENCHANTING",
    Farming = "FARMING",
    Foraging = "FORAGING",
    Mining = "MINING",
}

export interface RiftStats {
    rift_damage:     number;
    rift_walk_speed: number;
}

export interface Scaling {
    tiers: TierElement[];
}

export interface TierElement {
    numeric:    number;
    stats:      { [key: string]: number };
    item_tier?: TierEnum;
}

export enum TierEnum {
    Common = "COMMON",
    Epic = "EPIC",
    Legendary = "LEGENDARY",
    Mythic = "MYTHIC",
    Rare = "RARE",
    Special = "SPECIAL",
    Supreme = "SUPREME",
    Uncommon = "UNCOMMON",
    Unobtainable = "UNOBTAINABLE",
    VerySpecial = "VERY_SPECIAL",
}

export interface Stats {
    strength:         number;
    walk_speed:       number;
    critical_damage?: number;
    attack_speed?:    number;
}

export interface StatsOnRift {
    rift_time:         number;
    rift_intelligence: number;
    rift_mana_regen:   number;
}

export interface Swappable {
    color:     string;
    value:     string;
    signature: string;
}

export interface MuseumData {
    donation_xp?:           number;
    type:                   MuseumDataType;
    parent?:                { [key: string]: string };
    mapped_item_ids?:       string[];
    game_stage:             GameStage;
    armor_set_donation_xp?: { [key: string]: number };
}

export enum GameStage {
    Amateur = "AMATEUR",
    Expert = "EXPERT",
    Intermediate = "INTERMEDIATE",
    Master = "MASTER",
    Professional = "PROFESSIONAL",
    Skilled = "SKILLED",
    Starter = "STARTER",
}

export enum MuseumDataType {
    ArmorSets = "ARMOR_SETS",
    Rarities = "RARITIES",
    Weapons = "WEAPONS",
}

export enum Origin {
    Bingo = "BINGO",
    Rift = "RIFT",
}

export interface Prestige {
    item_id: string;
    costs:   SalvageElement[];
}

export interface Recipe {
    output:               Output;
    ingredient_symbols:   IngredientSymbols;
    matrix:               string[];
    allow_quick_crafting: boolean;
}

export interface IngredientSymbols {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
    F: string;
}

export interface Output {
    item_id: string;
}

export interface ItemRequirement {
    type:              CatacombsRequirementType;
    skill?:            RequirementSkill;
    level?:            number;
    reward?:           Reward;
    faction?:          Faction;
    reputation?:       number;
    slayer_boss_type?: SlayerBossType;
    dungeon_type?:     DungeonType;
    tier?:             number;
    collection?:       string;
    rabbit?:           string;
    mode?:             Mode;
    requirements?:     RequirementRequirement[];
    lore_index?:       number;
    kuudra_tier?:      KuudraTier;
    minimum_age_unit?: string;
    minimum_age?:      number;
}

export enum Faction {
    Barbarians = "BARBARIANS",
    Mages = "MAGES",
}

export enum KuudraTier {
    Burning = "BURNING",
    Fiery = "FIERY",
    Hot = "HOT",
    Infernal = "INFERNAL",
    None = "NONE",
}

export enum Mode {
    I = "I",
    Ii = "II",
    Iii = "III",
}

export interface RequirementRequirement {
    type:          string;
    profile_type?: string;
    tier?:         number;
}

export enum Reward {
    Bronze = "BRONZE",
    Diamond = "DIAMOND",
    Gold = "GOLD",
    Silver = "SILVER",
}

export enum SlayerBossType {
    Blaze = "blaze",
    Enderman = "enderman",
    Spider = "spider",
    Vampire = "vampire",
    Wolf = "wolf",
    Zombie = "zombie",
}

export interface PurpleSalvage {
    item_id: string;
    amount:  number;
}

export enum Soulbound {
    Coop = "COOP",
    Solo = "SOLO",
}

export interface TieredStats {
    WALK_SPEED?:            number[];
    DEFENSE?:               number[];
    HEALTH?:                number[];
    CRITICAL_DAMAGE?:       number[];
    CRITICAL_CHANCE?:       number[];
    DAMAGE?:                number[];
    WEAPON_ABILITY_DAMAGE?: number[];
    INTELLIGENCE?:          number[];
    STRENGTH?:              number[];
    ATTACK_SPEED?:          number[];
}
