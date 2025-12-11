export type FieldData = {

    /**
     * The internal name of the field
     */
    fieldName: string;

    /**
     * The human-readable label for the field.
     * If omitted, the `fieldName` will be used instead.
     */
    fieldLabel?: string;

    type: string
}