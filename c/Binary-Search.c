#include "binary_search.h"
const int *binary_search(int value, const int *arr, size_t length) {
    int low = 0;
    // 'length' size_t türünde olduğundan, aritmetik işlemler için int'e dönüştürülmesi iyi bir uygulamadır
    int high = (int)length - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2; // Orta indeksi hesapla

        // Değer orta indekste bulunduysa
        if (arr[mid] == value) {
            return &arr[mid]; // Bulunan değerin adresini döndür
        }
        // Aranacak değer ortadaki değerden büyükse, sağ yarıyı ara
        else if (arr[mid] < value) {
            low = mid + 1;
        }
        // Aranacak değer ortadaki değerden küçükse, sol yarıyı ara
        else {
            high = mid - 1;
        }
    }
    return NULL; // Değer bulunamadıysa NULL döndür
}