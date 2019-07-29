
//TODO Migrate:latest to add Unique constraint to username, added
//Cascade constraint to child_detail table

exports.up = function(knex) {
    return knex.schema 
    .createTable('users', tbl => {
        tbl.increments()
        tbl.text('username', 128).notNullable().unique()
        tbl.text('password', 256)
        tbl.text('email', 128)
        tbl.text('role', 128).notNullable() // parent | staff
        
    })

    .createTable('providers', tbl => {
        tbl.increments() 
        tbl.text('name', 255).notNullable()
    })

    .createTable('immunizations', tbl => {
        tbl.increments()
        tbl.text('name', 255).notNullable()
        tbl.integer('monthsAge')
        tbl.text('description', 255)
    })

    .createTable('parent_detail', tbl => {
        tbl.increments()
        tbl.text('firstName', 128).notNullable()
        tbl.text('lastName', 128).notNullable()
        tbl.text('address1', 128)
        tbl.text('address2', 128)
        tbl.text('city', 128)
        tbl.text('zip', 128)
        tbl.text('state', 2)
        tbl.text('phone', 128)
        tbl.text('comments', 255)
        tbl.bigInteger('userId').unsigned()
        
        
  })

    .createTable('child_detail', tbl => {
        tbl.increments()
        tbl.text('firstName', 128).notNullable()
        tbl.text('lastName', 128).notNullable()
        tbl.boolean('isPermission')  
        tbl.text('comments', 255)
        tbl.bigInteger('parentId')
        tbl.date('DOB').notNullable()  
        tbl.bigInteger('providerId').unsigned()
        
        })

    .createTable('staff_detail', tbl => {
        tbl.increments()
        tbl.text('firstName', 128).notNullable()
        tbl.text('lastName', 128).notNullable()
        tbl.text('comments', 255)
        tbl.bigInteger('userId').unsigned()
        tbl.text('title', 128)
        tbl.bigInteger('providerId')
        
        
    })

  
    .createTable('child_immunizations', tbl => {
        tbl.increments()
        tbl.date('dateReceived')
        tbl.text('location', 128)
        tbl.bigInteger('childId').notNullable()
        tbl.bigInteger('immunizationId').notNullable()
        
        
    })

    
};


exports.down = function(knex) {
    return knex.schema 
    
    .dropTableIfExists('users')
    .dropTableIfExists('providers')
    .dropTableIfExists('child_detail')
    .dropTableIfExists('staff_detail')
    .dropTableIfExists('immunizations')
    .dropTableIfExists('child_immunizations')
    .dropTableIfExists('parent_detail')
};
