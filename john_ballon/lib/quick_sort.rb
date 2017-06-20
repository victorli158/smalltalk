class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array <= 1
    pivot = array.length / 2
    right = sort1(array[0...pivot])
    left = sort1(array[pivot + 1..-1])

    left + array[pivot] + right
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    return array if length <= 1
    prc ||= Proc.new { |x, y| x <=> y }

    pivot = partition(array, start, length, &prc)
    left = sort2!(array, start, pivot - start, &prc)
    right = sort2!(array, pivot + 1, length - pivot - 1, &prc)

    array
  end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new { |x, y| x <=> y }
    pivot = array[start]
    pivot_index = start
    after_pivot = pivot_index + 1
    after_pivot.upto(length + after_pivot - 2) do |idx|
      if prc.call(array[idx], pivot) == -1
        array[pivot_index + 1], array[idx] = array[idx], array[pivot_index + 1]
        pivot_index += 1
      end
    end

    array[start], array[pivot_index] = array[pivot_index], array[start]

    pivot_index
  end
end
