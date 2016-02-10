def group_maker(array)
 group_hash = {}
 arrays = array.each_slice(5).to_a
 arrays.each do |item|
   num = arrays.index(item)+1
   group_hash["Group #{num}"] = item
 end
 return group_hash
end