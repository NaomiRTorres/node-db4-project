
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments('id');

      tbl.string('name', 255)
      .notNullable()
      .unique()
      .index();
    })

    .createTable('instructions', tbl => {
        tbl.string('id', 255)
        .primary();

        tbl.string('name', 255)
        .notNullable()
        .index();

        tbl.string('recipe_instructions', 255)
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })

    .createTable('ingredients', tbl => {
        tbl.string('id', 255)
        .primary();

        tbl.string('name', 255)
        .notNullable()
        .index();

        tbl.string('instruction_id', 255)
        .notNullable()
        .references('id')
        .inTable('instructions')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })

    .createTable('ingredients_recipes', tbl => {
        tbl.string('id', 255)
        .primary();

        tbl.string('ingredient_id', 255)
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl.string('recipe_id', 255)
        .notNullable()
        .references('id')
        .inTable('recipe')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl.unique(['ingredient_id', 'recipe_id']);
    })



};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients_recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes')
};
