"""Functions to prevent a nuclear meltdown."""


def is_criticality_balanced(temperature: float, neutrons_emitted: float) -> bool:
    """Verify criticality is balanced.

    :param temperature: int or float - temperature value in kelvin.
    :param neutrons_emitted: int or float - number of neutrons emitted per second.
    :return: bool - is criticality balanced?

    A reactor is said to be critical if it satisfies the following conditions:
    - The temperature is less than 800 K.
    - The number of neutrons emitted per second is greater than 500.
    - The product of temperature and neutrons emitted per second is less than 500000.
    """
    # Sıcaklık 800 K'den az olmalı
    temp_condition = temperature < 800
    # Saniyede yayılan nötron sayısı 500'den fazla olmalı
    neutrons_condition = neutrons_emitted > 500
    # Sıcaklık ve nötron çarpımı 500000'den az olmalı
    product_condition = (temperature * neutrons_emitted) < 500000

    # Tüm koşullar aynı anda sağlanırsa kritiksellik dengelenmiş demektir
    return temp_condition and neutrons_condition and product_condition


def reactor_efficiency(voltage: float, current: float, theoretical_max_power: float) -> str:
    """Assess reactor efficiency zone.

    :param voltage: int or float - voltage value.
    :param current: int or float - current value.
    :param theoretical_max_power: int or float - power that corresponds to a 100% efficiency.
    :return: str - one of ('green', 'orange', 'red', or 'black').

    Efficiency can be grouped into 4 bands:

    1. green -> efficiency of 80% or more,
    2. orange -> efficiency of less than 80% but at least 60%,
    3. red -> efficiency below 60%, but still 30% or more,
    4. black ->  less than 30% efficient.

    The percentage value is calculated as
    (generated power/ theoretical max power)*100
    where generated power = voltage * current
    """
    # Üretilen gücü hesapla
    generated_power = voltage * current
    # Verimlilik yüzdesini hesapla
    efficiency_percentage = (generated_power / theoretical_max_power) * 100

    # Verimlilik yüzdesine göre renk bölgesini belirle
    return ('green' if efficiency_percentage >= 80 else
            'orange' if efficiency_percentage >= 60 else
            'red' if efficiency_percentage >= 30 else
            'black')

def fail_safe(temperature: float, neutrons_produced_per_second: float, threshold: float) -> str:
    """Assess and return status code for the reactor.
    (This is the original function name the tests are looking for.)
    """
    product = temperature * neutrons_produced_per_second
    low_threshold_limit = 0.9 * threshold
    high_threshold_limit = 1.1 * threshold

    # You can keep the one-liner logic here if you prefer
    return 'LOW' if product < low_threshold_limit else ('NORMAL' if low_threshold_limit <= product <= high_threshold_limit else 'DANGER')