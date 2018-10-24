
#1 pet shop name "camelot of Pets"
def pet_shop_name(shop_name)
  return shop_name[:name]
end
# 2 total cash in shop = > 1000
def total_cash(shop_cash)
  return shop_cash[:admin][:total_cash]
end

#  3: add/remove 10 to total in shop - {110, 90}
def add_or_remove_cash(pet_shop, amount)
  pet_shop[:admin][:total_cash] += amount
end

#4 no of pets sold => 0
def pets_sold(no_sold)
  return no_sold[:admin][:pets_sold]
end

#5 increase in no of pets sold by +2
def increase_pets_sold(pet_shop, pets)
  pet_shop[:admin][:pets_sold] += pets
end

#6 stock count check of pets
def stock_count(stock_level)
  return stock_level[:pets].count()
end

#7/8 pets found by breed
def pets_by_breed(pet_shop, breed_type)
  match = []
  # loop over petshop array
  for pet in pet_shop[:pets]
    # if breed = "british shorthair"
    if pet[:breed] == breed_type
      match.push(pet) #push to new array
    end
  end
  return match
end

#9/10 find Fred & Arthur by name
def find_pet_by_name(shop, pet_name)
  found_match = nil
  for pet in shop[:pets]
    if (pet[:name] == pet_name)
      found_match = pet
    end
  end
  return found_match
end

# 11 remove arthur
def remove_pet_by_name(shop, pet_name)
  for pet in shop[:pets]
    if pet[:name] == pet_name
      shop[:pets].delete(pet)
    end
  end
end
# OR.. THIS ALSO WORKS...
# def remove_pet_by_name(shop, name)
#   to_remove = find_pet_by_name(shop,name)
# shop[:pets].delete(to_remove)
# end

#12 add pet to stock
def add_pet_to_stock(shop, new_pet)
  # breed = []
  shop[:pets].push(new_pet)
end

#13 check customer1 has 1000 cash
def customer_cash(check_cash)
  return check_cash[:cash]
end

#14 remove cash from customer1
def remove_customer_cash(customer, amount)
  return customer[:cash] -= amount
end

#15 count customer no. of pets
def customer_pet_count(no_of_pets)
  return no_of_pets[:pets].count()
end

#16 add a pet to customer01
def add_pet_to_customer(customer, new_pet)
  customer[:pets].push(new_pet)
end

#17/18 check custoemr can afford new pet
def customer_can_afford_pet(customer, new_pet)
  return customer[:cash] >= new_pet[:price]
end

#19-21 : integration tests
def sell_pet_to_customer(shop, pet, customer)
  # return if no pets and if customer can afford...
  return if (pet == nil)
  if customer_can_afford_pet( customer,pet )
    # ...then call appropriate method
    add_pet_to_customer(customer,pet) #add pet to cust
    increase_pets_sold(shop, 1) #now increase no sold by shop
    remove_customer_cash(customer, pet[:price]) #..and remove cust's cash
    add_or_remove_cash(shop,pet[:price] ) #...and add to shop till
  end
end
