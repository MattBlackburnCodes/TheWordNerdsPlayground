import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, ActivityIndicator } from "react-native";

export default function QuotesScreen() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuote(); // Fetch a quote when the screen loads
  }, []);

  const fetchQuote = () => {
    setLoading(true);
    fetch("https://zenquotes.io/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        setQuote(randomQuote);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
        setLoading(false);
      });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="white" />;
  }
  else if (!quote) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Failed to load quote.</Text>
        <Button title="Try Again" onPress={fetchQuote} />
      </View>
    );
  }

  //Displays the quote, author, and a button to fetch a new quote from the api
  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>{quote.q}</Text>
      <Text style={styles.authorText}>- {quote.a}</Text>
      <Button title="Get New Quote" onPress={fetchQuote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  loadingText: {
    fontSize: 18,
  },
  quoteText: {
    fontSize: 24,
    fontStyle: "italic",
    marginBottom: 10,
    textAlign: "center",
  },
  authorText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
