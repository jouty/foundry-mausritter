export class DLCreatureSettings extends FormApplication {
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.id = 'sheet-modifiers';
        options.classes = ["mausritter", "sheet", "actor", "hireling"];
        options.template = 'systems/mausritter/templates/dialogs/creature-settings-dialog.html';
        options.width = 320;
        options.height = 150;
        return options;
    }

    get title() {
        return `${this.object.name}: Creature Settings`;
    }

    getData() {
        return {
            actor: this.object,
            system: this.object.system
        };
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        const checkboxIds = [
            "system.stats.combat.enabled",
            "system.stats.instinct.enabled",
            "system.stats.loyalty.enabled",
            "system.stats.speed.enabled",
            "system.stats.armor.enabled",
            "system.stats.sanity.enabled"
        ];

        for (const id of checkboxIds) {
            html.find(`input[type=checkbox][id="${id}"]`).click(ev => {
                this.object.update({ [id]: ev.currentTarget.checked });
            });
        }
    }

    async _updateObject(event, formData) {
        await this.object.update(foundry.utils.expandObject(formData));
        this.object.sheet.render(true);
    }
}
