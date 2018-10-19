# # ASK YOURSELF DOES IT PERFORM AN ACTUAL FUNCTION/OPERATION ON THE DATA?
# IF NOT, DONT RETURN!

#1 pet shop name "camelot of Pets"
def pet_shop_name(name)
  return name[:name]
end
# 2 total cash in shop=> 1000
def total_cash(cash_in_petshop)
  return cash_in_petshop[:admin][:total_cash]
end

#  3: add/remove 10 GDP to total cash in shop - 2 q's {110, 90}
def add_or_remove_cash(pet_shop, amount)
  pet_shop[:admin][:total_cash] += amount
end

#4 NO OF PETS SOLD => 0
def pets_sold(sold)
  return sold[:admin][:pets_sold]
end

#5 increase in no of pets sold by +2
def increase_pets_sold(pet_shop, pets)
  pet_shop[:admin][:pets_sold] += pets
end

#6 stock count check of pets
def stock_count(pet_shop)
  return pet_shop[:pets].count()
end

#7 pets found by breed
def pets_by_breed(pet_shop, breed_type)
  type = Array.new()
  # loop over petshop array
  for pet in pet_shop[:pets]
     #if breed-type = "british shorthair"
    if pet[:breed] == breed_type
    type.push(pet) #add/push to new array
    end
  end
  return p type
end
# pet breed not found {dalmation}
def pets_by_breed()
end
