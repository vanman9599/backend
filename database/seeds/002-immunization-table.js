
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('immunizations').del()
    .then(function () {
      // Inserts seed entries
      return knex('immunizations').insert([
        { description: 'Hepatitis B', name: 'HepB', monthsAge: 0, dose: 1},
        { description: 'Hepatitis B', name: 'HepB', monthsAge: 2, dose: 2},
        { description: 'Hepatitis B', name: 'HepB', monthsAge: 12, dose: 3},
        { description: 'Rotavirus', name: 'RV', monthsAge: 2, dose: 1},
        { description: 'Rotavirus', name: 'RV', monthsAge: 4, dose: 2},
        { description: 'Diptheria, tetanus, & ancellular pertussis', name: 'DTap', monthsAge: 2, dose: 1},
        { description: 'Diptheria, tetanus, & ancellular pertussis', name: 'DTap', monthsAge: 4, dose: 2},
        { description: 'Diptheria, tetanus, & ancellular pertussis', name: 'DTap', monthsAge: 6, dose: 3},
        { description: 'Diptheria, tetanus, & ancellular pertussis', name: 'DTap', monthsAge: 15, dose: 4},
        { description: 'Haemophilus influezae type b', name: 'Hib', monthsAge: 2, dose: 1},
        { description: 'Haemophilus influezae type b', name: 'Hib', monthsAge: 4, dose: 2}, 
        { description: 'Haemophilus influezae type b', name: 'Hib', monthsAge: 12, dose: 3},  
        { description: 'Pneumococcal conugate', name: 'PCV13', monthsAge: 2, dose: 1},
        { description: 'Pneumococcal conugate', name: 'PCV13', monthsAge: 4, dose: 2},
        { description: 'Pneumococcal conugate', name: 'PCV13', monthsAge: 6, dose: 3},
        { description: 'Pneumococcal conugate', name: 'PCV13', monthsAge: 12, dose: 4},
        { description: 'Inactivated poliovirus',name: 'IPV', monthsAge: 2, dose: 1},
        { description: 'Inactivated poliovirus',name: 'IPV', monthsAge: 4, dose: 2},
        { description: 'Inactivated poliovirus',name: 'IPV', monthsAge: 12, dose: 3},
        { description: 'Inactivated poliovirus',name: 'IPV', monthsAge: 48, dose: 4},
        { description: 'Influenza', name: 'IIV', monthsAge: 12, dose: 1},
        { description: 'Influenza', name: 'IIV', monthsAge: 24, dose: 2},
        { description: 'Influenza', name: 'IIV', monthsAge: 36, dose: 3},
        { description: 'Influenza', name: 'IIV', monthsAge: 48, dose: 4},
        { description: 'Influenza', name: 'IIV', monthsAge: 60, dose: 5},
        { description: 'Measles, mumps, rubella', name: 'MMR', monthsAge: 12, dose: 1},
        { description: 'Measles, mumps, rubella', name: 'MMR', monthsAge: 48, dose: 2},
        { description: 'Varicella', name: 'VAR', monthsAge: 12, dose: 1},
        { description: 'Varicella', name: 'VAR', monthsAge: 48, dose: 2},
        { description: 'Hepatitis A', name: 'HepA', monthsAge: 12, dose: 1},
        { description: 'Hepatitis A', name: 'HepA', monthsAge: 18, dose: 2},
        { description: 'Meningococcal', name: 'MenACWY-D', monthsAge: 144, dose: 2},
        { description: 'Meningococcal', name: 'MenACWY-D', monthsAge: 192, dose: 2},
        { description: 'Tetanus, deptheria, and acellular pertusis', name: 'Tdap', monthsAge: 144, dose: 2},
        { description: 'Human papillomavirus', name: 'HPV', monthsAge: 144, dose: 2},
        
        
      ]);
    });
};
