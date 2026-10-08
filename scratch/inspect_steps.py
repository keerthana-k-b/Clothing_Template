import json

log_file = r'C:\Users\HP\.gemini\antigravity-ide\brain\96d06b01-2df8-4bdd-af9b-a0f91766a213\.system_generated\logs\transcript_full.jsonl'
with open(log_file, 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        idx = data.get('step_index')
        if idx and 665 <= idx <= 680:
            print(f"Step {idx}: {data.get('type')} - {data.get('source')}")
            calls = data.get('tool_calls', [])
            for c in calls:
                args = c.get('args', {})
                desc = args.get('CommandLine') or args.get('Prompt') or args.get('TargetFile') or ''
                print('  Call:', c.get('name'), str(desc)[:100])
            if data.get('content') and data.get('source') == 'MODEL' and not calls:
                print('  Content:', repr(data.get('content')[:300]))
