const { SchemaField, NumberField, StringField, BooleanField, HTMLField } = foundry.data.fields;

function baseFields() {
  return {
    health: new SchemaField({
      value: new NumberField({ initial: 0, integer: true, nullable: false }),
      min: new NumberField({ initial: 0, integer: true, nullable: false }),
      max: new NumberField({ initial: 0, integer: true, nullable: false })
    }),
    hits: new SchemaField({
      value: new NumberField({ initial: 2, integer: true, nullable: false }),
      max: new NumberField({ initial: 2, integer: true, nullable: false })
    }),
    armor: new NumberField({ initial: 0, integer: true, nullable: false }),
    biography: new HTMLField({ initial: "" }),
    notes: new HTMLField({ initial: "" })
  };
}

function statsFields() {
  return new SchemaField({
    strength: new SchemaField({
      value: new NumberField({ initial: 0, integer: true, nullable: false }),
      label: new StringField({ initial: "Strength" }),
      max: new NumberField({ initial: 0, integer: true, nullable: false })
    }),
    dexterity: new SchemaField({
      value: new NumberField({ initial: 0, integer: true, nullable: false }),
      label: new StringField({ initial: "Dexterity" }),
      max: new NumberField({ initial: 0, integer: true, nullable: false })
    }),
    will: new SchemaField({
      value: new NumberField({ initial: 0, integer: true, nullable: false }),
      label: new StringField({ initial: "Will" }),
      max: new NumberField({ initial: 0, integer: true, nullable: false })
    })
  });
}

export class CharacterDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      ...baseFields(),
      description: new SchemaField({
        background: new StringField({ initial: "Description" }),
        birthsign: new StringField({ initial: "" }),
        coat: new StringField({ initial: "" }),
        look: new StringField({ initial: "" })
      }),
      level: new SchemaField({
        value: new NumberField({ initial: 1, integer: true, nullable: false }),
        xp: new NumberField({ initial: 0, integer: true, nullable: false })
      }),
      pips: new SchemaField({
        value: new NumberField({ initial: 0, integer: true, nullable: false })
      }),
      grit: new SchemaField({
        value: new NumberField({ initial: 0, integer: true, nullable: false }),
        ignored: new StringField({ initial: "" })
      }),
      stats: statsFields(),
      other: new SchemaField({
        grit: new SchemaField({
          value: new NumberField({ initial: 0, integer: true, nullable: false })
        })
      })
    };
  }
}

export class HirelingDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      ...baseFields(),
      description: new SchemaField({
        disposition: new StringField({ initial: "" })
      }),
      stats: statsFields()
    };
  }
}

export class CreatureDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      ...baseFields(),
      description: new SchemaField({
        disposition: new StringField({ initial: "" })
      }),
      stats: statsFields()
    };
  }
}

export class StorageActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      ...baseFields(),
      description: new SchemaField({
        disposition: new StringField({ initial: "" })
      }),
      size: new SchemaField({
        width: new NumberField({ initial: 3, integer: true, nullable: false }),
        height: new NumberField({ initial: 2, integer: true, nullable: false })
      }),
      storeDiv: new StringField({ initial: "" })
    };
  }
}
