def linearSearch(array, search)
  index = 0;
  while (index < array.length)
    if (array[index] == search)
      return index;
    end
    index +=1;
  end
  return -1;
end

array = [3,45,66,77,33,22,5,10]
key = 33;
p  linearSearch(array, key)

# //bubble sort algorithm
def bubble(array)
  n = array.length
  loop do
    swapped = false

    (n-1).times do |i|
      if array[i] > array[i+1]
        array[i],
        array[i+1] = array[i+1], array[i]
        swapped = true
      end
    end

    break if not swapped
  end

p  array
end

p  bubble([1,5,2,8,4,6])
