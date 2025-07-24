def factors(value):
    if value==1:
        return []
    res=[]
    a=2
    while value!=1:
        if value%a==0:
            value/=a
            res.append(a)
        else:
            a+=1

    return res
