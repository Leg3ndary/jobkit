import g4f

response = g4f.ChatCompletion.create(
    model=g4f.models.gpt_4o,
    messages=[{"role": "user", "content": "What's the meaning of life?"}],
)

print(response)