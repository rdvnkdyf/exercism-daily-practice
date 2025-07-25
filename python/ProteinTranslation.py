from itertools import takewhile
from textwrap import wrap

catalogue = {
    'AUG': 'Methionine',
    'UUC': 'Phenylalanine',
    'UUU': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAC': 'Tyrosine',
    'UAU': 'Tyrosine',
    'UGC': 'Cysteine',
    'UGU': 'Cysteine',
    'UGG': 'Tryptophan',
}

def is_not_stop(pattern):
    return pattern not in('UAG', 'UAA', 'UGA')
def proteins(strand):
    print(wrap(strand,3))
    return [protein
            for pattern in takewhile(is_not_stop, wrap(strand, 3))
            for protein in (catalogue.get(pattern, None),)
            if protein]