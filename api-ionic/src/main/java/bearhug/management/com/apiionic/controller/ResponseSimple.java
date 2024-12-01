package bearhug.management.com.apiionic.controller;

public record ResponseSimple<T>(
        boolean status,
        String message,
        T data
) {
}
