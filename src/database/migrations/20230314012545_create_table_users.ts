import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
        table.increments('id'),
        table.string('name'),
        table.integer('age'),
        table.string('role')
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}
