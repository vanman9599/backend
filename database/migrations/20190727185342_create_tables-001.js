
exports.up = function(knex) {
    return knex.schema 
    .createTable('users', tbl => {
        tbl.increments()
        tbl.text('username', 128).notNullable().unique()
        tbl.text('password', 256).notNullable()
        tbl.text('email', 128)
        tbl.text('role', 128).notNullable() // parent | child | staff
        tbl.text('firstName', 128).notNullable()
        tbl.date('DOB').notNullable()
        tbl.onDelete('CASCADE')

    })
    .createTable('parent_detail', tbl => {
        tbl.increments()
        tbl.text('address1', 128)
        tbl.text('address2', 128)
        tbl.text('city', 128)
        tbl.text('zip', 128)
        tbl.text('state', 2)
        tbl.text('phone', 128)
        tbl.text('comments', 255)
        tbl.bigInteger('userId').unsigned()
        tbl.foreign('userId').references('id').inTable('users')
        tbl.onDelete('CASCADE')
  })

    .createTable('child_detail', tbl => {
        tbl.increments()
        tbl.boolean('isPermission')
        tbl.text('comments', 255)
        tbl.bigInteger('userId').unsigned()
        tbl.foreign('userId').references('id').inTable('users')
        tbl.foreign('providerId').references('id').inTable('providers')
        tbl.onDelete('RESTRICT')
    })

    .createTable('staff_detail', tbl => {
        tbl.increments()
        tbl.text('comments', 255)
        tbl.bigInteger('userId').unsigned()
        tbl.text('title', 128)
        tbl.foreign('userId').references('id').inTable('users').notNullable()
        tbl.foreign('providerId').references('id').inTable('providers').notNullable()
        tbl.onDelete('RESTRICT')
    })

    .createTable('providers', tbl => {
        tbl.increments()
        tbl.text('name', 255).notNullable()
        tbl.onDelete('CASCADE')
    })

    .createTable('immunizations', tbl => {
        tbl.increments()
        tbl.text('name', 255).notNullable()
        tbl.integer('monthsAge')
        tbl.text('description', 255)
    })
    .createTable('child_immunizations', tbl => {
        tbl.increments()
        tbl.text('name', 255).notNullable()
        tbl.date('dateReceived')
        tbl.text('location', 128)
        tbl.foreign('childId').references('id').inTable('users')
    })

    
};

exports.down = function(knex) {
  
};
