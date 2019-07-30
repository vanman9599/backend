
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('immunizations').del()
    .then(function () {
      // Inserts seed entries
      return knex('immunizations').insert([
        { description: 'Hepatitis B', name: 'HepB'}, 
        { description: 'Rotavirus', name: 'RV'},
        { description: 'Diptheria, tetanus, & ancellular pertussis', name: 'DTap'},
      { description: 'Haemophilus influezae type b', name: 'Hib'}, 
        { description: 'Pneumococcal conugate', name: 'PCV13'},
        { description: 'Inactivated poliovirus',name: 'IPV'},
        { description: 'Influenza', name: 'IIV'},
        { description: 'Measles, mumps, rubella', name: 'MMR'},
        { description: 'Varicella', name: 'VAR'},
        { description: 'Hepatitis A', name: 'HepA'},
        { description: 'Meningococcal', name: 'MenACWY-D'},
        { description: 'Tetanus, deptheria, and acellular pertusis', name: 'Tdap'},
        { description: 'Human papillomavirus', name: 'HPV'},
        
        
      ]);
    });
};
