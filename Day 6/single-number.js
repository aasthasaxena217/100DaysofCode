class SingleNumber {
    public int findSingle(int[] nums) {
        int uniqueNumber = 0; 
        for (int num : nums) {
            uniqueNumber ^= num; 
        }
        return uniqueNumber; 
    }
}
