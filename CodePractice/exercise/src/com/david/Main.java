package com.david;

import java.util.Scanner;

public class Main {


    public static void main(String[] args) {

        int number;
        int remainder;
        boolean isPrime = true;
        Scanner numbCheck = new Scanner(System.in);
        System.out.println("please enter a number to check if a prime number");
        number = numbCheck.nextInt();

        //Loop to check whether the numberToCheckber is divisible any numberToCheckber other than 1 and iteself
        for (int i = 2; i < number / 2; i++) {
            //numberToChecker is dived by itself
            remainder = number % i;
            System.out.println(number + " Divided by " + i + " gives a remainder " + remainder);
            //if remainder is 0 than numberToCheckber is not prime and break loop. Elese continue loop
            if (remainder == 0) {
                isPrime = false;
                break;
            }
        }

        // Check value true or false,if isprime is true then numberToCheckber is prime otherwise not prime
        if (isPrime)
            System.out.println(number + " is a prime number");
        else {
            System.out.println(number + " is not a prime number");
        }
    }


}
