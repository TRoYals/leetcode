count_of_testcases = int(input())


def findMinMax(curr_arr):
    curr_arr = [int(each) for each in curr_arr]
    findMin = False
    while not findMin:
        curr_small = min(curr_arr)
        index = curr_arr.index(curr_small)
        if index == 0:
            if curr_arr[index] == curr_arr[index + 1]:
                findMin = True
                return curr_arr[index] - 1
        elif index == len(curr_arr) - 1:
            if curr_arr[index] == curr_arr[index - 1]:
                findMin = True
                return curr_arr[index] - 1
        else:
            if (
                curr_arr[index] == curr_arr[index + 1]
                or curr_arr[index] == curr_arr[index - 1]
            ):
                findMin = True
                return curr_arr[index] - 1

        if index == 0:
            curr_arr[index] = curr_arr[index + 1]
        elif index == len(curr_arr) - 1:
            curr_arr[index] = curr_arr[index - 1]
        else:
            curr_arr[index] = min(curr_arr[index + 1], curr_arr[index - 1])


for i in range(count_of_testcases):
    curr_arr_length = int(input())
    curr_arr = input().split(" ")
    print(findMinMax(curr_arr))
