package com.example.phone_store.controller.product;

public class Demo {
        public static int findThirdLargest(int[] arr) {
            if (arr.length < 3) {
                System.out.println("Mảng không đủ phần tử");
                return -1;
            }

            int first = Integer.MIN_VALUE;
            int second = Integer.MIN_VALUE;
            int third = Integer.MIN_VALUE;

            for (int i = 0; i < arr.length; i++) {
                if (arr[i] > first) {
                    third = second;
                    second = first;
                    first = arr[i];
                } else if (arr[i] > second) {
                    third = second;
                    second = arr[i];
                } else if (arr[i] > third) {
                    third = arr[i];
                }
            }

            return third;
        }

        public static void main(String[] args) {
            int[] arr = {9, 5, 2, 7, 1, 8, 6};
            int thirdLargest = findThirdLargest(arr);
            System.out.println("Số lớn thứ ba trong mảng là: " + thirdLargest);
        }
}
