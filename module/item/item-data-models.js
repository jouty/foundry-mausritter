const { SchemaField, NumberField, StringField, BooleanField, HTMLField } = foundry.data.fields;

function baseFields() {
  return {
    description: new HTMLField({ initial: "" }),
    sheet: new SchemaField({
      active: new BooleanField({ initial: false }),
      currentX: new NumberField({ initial: 0, nullable: false }),
      currentY: new NumberField({ initial: 0, nullable: false }),
      initialX: new NumberField({ initial: 0, nullable: false }),
      initialY: new NumberField({ initial: 0, nullable: false }),
      xOffset: new NumberField({ initial: 0, nullable: false }),
      yOffset: new NumberField({ initial: 0, nullable: false }),
      rotation: new NumberField({ initial: 0, nullable: false }),
      curWidth: new NumberField({ initial: 1, nullable: false }),
      curHeight: new NumberField({ initial: 1, nullable: false }),
      zIndex: new NumberField({ initial: 1, integer: true, nullable: false })
    }),
    pips: new SchemaField({
      value: new NumberField({ initial: 0, integer: true, nullable: false }),
      max: new NumberField({ initial: 0, integer: true, nullable: false }),
      html: new StringField({ initial: "" })
    }),
    size: new SchemaField({
      width: new NumberField({ initial: 1, integer: true, nullable: false }),
      height: new NumberField({ initial: 1, integer: true, nullable: false }),
      x: new StringField({ initial: "9em" }),
      y: new StringField({ initial: "9em" }),
      aspect: new NumberField({ initial: 1, nullable: false })
    })
  };
}

function commonItemFields() {
  return {
    weight: new NumberField({ initial: 0, nullable: false }),
    cost: new NumberField({ initial: 0, nullable: false }),
    tag: new StringField({ initial: "" }),
    color: new StringField({ initial: "white" })
  };
}

export class ItemDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      ...baseFields(),
      ...commonItemFields(),
      placement: new StringField({ initial: "hand" })
    };
  }
}

export class WeaponDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      ...baseFields(),
      ...commonItemFields(),
      placement: new StringField({ initial: "hand" }),
      weapon: new SchemaField({
        dmg1: new StringField({ initial: "d6" }),
        dmg2: new StringField({ initial: "" }),
        selected: new NumberField({ initial: 0, integer: true, nullable: false }),
        canSwap: new BooleanField({ initial: false })
      })
    };
  }
}

export class ArmorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      ...baseFields(),
      ...commonItemFields(),
      armor: new SchemaField({
        value: new NumberField({ initial: 1, integer: true, nullable: false })
      })
    };
  }
}

export class StorageItemDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      ...baseFields(),
      ...commonItemFields(),
      store: new SchemaField({
        value: new StringField({ initial: "0" }),
        max: new NumberField({ initial: 25, integer: true, nullable: false })
      })
    };
  }
}

export class ConditionDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      ...baseFields(),
      clear: new StringField({ initial: "" }),
      desc: new StringField({ initial: "" }),
      color: new StringField({ initial: "white" })
    };
  }
}

export class SpellDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      ...baseFields(),
      tag: new StringField({ initial: "" }),
      isSpell: new BooleanField({ initial: true }),
      color: new StringField({ initial: "white" })
    };
  }
}
