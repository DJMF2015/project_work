#homework- PartA, 22/10/2018
class Student
  #initalisers
  def initialize(name, cohort, language)
    @name = name
    @cohort = cohort
    @language = language
    #  would render the variable inaccessible without instance @
    # language = langauge as local variable only availble within scope of method
  end
 #getter
  def name
    return @name
  end
 #getter
  def cohort
    return @cohort
  end
 #setter
  def change_cohort(set_new_cohort)
    @cohort = set_new_cohort
  end
  #setter
  def change_name(set_new_name)
    @name = set_new_name
  end

  def call_talk()
    return  "I can talk!"
  end

  def favourite_language(fav_language)
     return "I love #{fav_language}"
  end

  # def favourite_language()
  #    return "I love #{@fav_language}"
  # end
  
end
