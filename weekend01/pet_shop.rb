# # ASK YOURSELF DOES IT PERFORM AN ACTUAL FUNCTION/OPERATION ON THE DATA?

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
def increase_pets_sold(shop, pets)
  shop[:admin][:pets_sold] += pets
end

#6 stock count check of pets
def stock_count(shop)
  return shop[:pets].count()
end

#7/8 pets found by breed
def pets_by_breed(shop, breed_type)
  type = []
  # loop over petshop array
  for pet in shop[:pets]
    # if breed-type = "british shorthair"
    if pet[:breed] == breed_type
      type.push(pet) #add/push to new array
    end
  end
  return type
end

#9/10 find Fred & Arthur by name
def find_pet_by_name(shop, name)
  found = nil
  for pet in shop[:pets]
    if (pet[:name] == name)
      found = pet
    end
  end
  return found
end

#11 remove artur
def remove_pet_by_name(shop, name)
  for pet in shop[:pets]
    if pet[:name] == name
      shop[:pets].delete(pet)
    end
  end
end
#12 add pet to stock
def add_pet_to_stock(shop, new_pet)
    # breed = []
 shop[:pets].push(new_pet)
end
#13 check customer1 has 1000 cash
def customer_cash(cash)
  return cash[:cash]
end
#14 remove cash from customer1
def remove_customer_cash()


end
