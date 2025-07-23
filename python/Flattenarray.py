def flatten(iterable):
    list1 = []
    while iterable[::-1]:
        item = iterable.pop()
        if isinstance(item, list):
            iterable.extend(item)
        elif isinstance(item, int):
            list1.append(item)
    return list1[::-1]